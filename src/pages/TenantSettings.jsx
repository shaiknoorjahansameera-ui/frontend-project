import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const defaultSettings = {
  storeName: "MarketSphere",
  storeLogo: "",
  themeColor: "#f97316",
  appTheme: "light"
}

function loadSettings() {
  return {
    storeName: localStorage.getItem("tenantStoreName") || defaultSettings.storeName,
    storeLogo: localStorage.getItem("tenantStoreLogo") || defaultSettings.storeLogo,
    themeColor: localStorage.getItem("tenantThemeColor") || defaultSettings.themeColor,
    appTheme: localStorage.getItem("appTheme") || defaultSettings.appTheme
  }
}

function TenantSettings() {
  const [settings, setSettings] = useState(loadSettings)

  useEffect(() => {
    document.documentElement.dataset.theme = settings.appTheme
    document.documentElement.style.setProperty("--primary", settings.themeColor)
  }, [settings.appTheme, settings.themeColor])

  function updateSetting(key, value) {
    setSettings((current) => ({
      ...current,
      [key]: value
    }))
  }

  function saveSettings(event) {
    event.preventDefault()

    localStorage.setItem("tenantStoreName", settings.storeName)
    localStorage.setItem("tenantStoreLogo", settings.storeLogo)
    localStorage.setItem("tenantThemeColor", settings.themeColor)
    localStorage.setItem("appTheme", settings.appTheme)
    window.dispatchEvent(new Event("tenant-settings-updated"))

    toast.success("Store settings saved")
  }

  function resetSettings() {
    setSettings(defaultSettings)
    localStorage.setItem("tenantStoreName", defaultSettings.storeName)
    localStorage.setItem("tenantStoreLogo", defaultSettings.storeLogo)
    localStorage.setItem("tenantThemeColor", defaultSettings.themeColor)
    localStorage.setItem("appTheme", defaultSettings.appTheme)
    window.dispatchEvent(new Event("tenant-settings-updated"))

    toast("Default settings restored")
  }

  return (
    <main className="settings-page">
      <section className="dashboard-heading">
        <div>
          <p className="eyebrow">SaaS Store Setup</p>
          <h1>Tenant Settings</h1>
          <p>Customize store identity, logo, theme color, and display mode.</p>
        </div>
      </section>

      <section className="settings-layout">
        <form className="settings-form" onSubmit={saveSettings}>
          <label htmlFor="storeName">Store Name</label>
          <input
            id="storeName"
            type="text"
            value={settings.storeName}
            onChange={(event) => updateSetting("storeName", event.target.value)}
            required
          />

          <label htmlFor="storeLogo">Store Logo URL</label>
          <input
            id="storeLogo"
            type="url"
            placeholder="https://example.com/logo.png"
            value={settings.storeLogo}
            onChange={(event) => updateSetting("storeLogo", event.target.value)}
          />

          <label htmlFor="themeColor">Store Theme Color</label>
          <input
            id="themeColor"
            type="color"
            value={settings.themeColor}
            onChange={(event) => updateSetting("themeColor", event.target.value)}
          />

          <label htmlFor="appTheme">Display Theme</label>
          <select
            id="appTheme"
            value={settings.appTheme}
            onChange={(event) => updateSetting("appTheme", event.target.value)}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>

          <div className="settings-actions">
            <button type="submit">Save Settings</button>
            <button type="button" className="secondary-button" onClick={resetSettings}>
              Reset
            </button>
          </div>
        </form>

        <aside className="settings-preview">
          <p className="eyebrow">Preview</p>
          <div className="preview-logo">
            {settings.storeLogo ? (
              <img src={settings.storeLogo} alt={`${settings.storeName} logo`} />
            ) : (
              <span>{settings.storeName.slice(0, 2).toUpperCase()}</span>
            )}
          </div>
          <h2>{settings.storeName}</h2>
          <p>Current mode: {settings.appTheme}</p>
        </aside>
      </section>
    </main>
  )
}

export default TenantSettings
