import { saveAs } from 'file-saver/FileSaver'

const DownloadWhitepaper = async () => {
  try {
    const withepaper = await fetch(`${process.env.API_URL}/whitepaper`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/pdf' }
    })

    const withepaperBlob = await withepaper.blob()
    saveAs(withepaperBlob, 'whitepaper_Karbon14.pdf')
  } catch (e) {
    //
  }
}

export { DownloadWhitepaper }
