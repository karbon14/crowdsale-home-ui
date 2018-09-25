import { saveAs } from 'file-saver/FileSaver'

const DownloadWhitepaper = async (lang = 'en') => {
  try {
    const withepaper = await fetch(
      `${process.env.API_URL}/whitepaper?lang=${lang.toLowerCase()}`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/pdf' }
      }
    )

    const withepaperBlob = await withepaper.blob()
    saveAs(withepaperBlob, `whitepaper_Karbon14_${lang.toUpperCase()}.pdf`)
  } catch (e) {
    //
  }
}

export { DownloadWhitepaper }
