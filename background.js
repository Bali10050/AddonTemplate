const globalSheet = browser.runtime.getURL("chrome/userChrome.css");
const contentSheet = browser.runtime.getURL("chrome/userContent.css");

// https://searchfox.org/mozilla-central/source/layout/base/nsIStyleSheetService.idl
async function startup() {
  if (!("stylesheet" in browser)) {
    alert("MISSING API");
  }

  browser.stylesheet.load(globalSheet, "AGENT_SHEET");
  browser.stylesheet.load(contentSheet, "USER_SHEET");
}

startup();
