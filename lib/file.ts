/**
 * blob 转为 base64
 * @param blob
 */
export function blob2Base64(blob: Blob): Promise<string | ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(blob)
    reader.onload = () => {
      const result = reader.result
      if (result) {
        resolve(result)
      } else {
        reject()
      }
    }
  })
}

/**
 * 下载blob文件
 * @param blob 
 * @param fileName 
 */
export function downloadBlob(blob: Blob, fileName: string) {
  const blobUrl = window.URL.createObjectURL(blob)
  const downloadLink = document.createElement('a')
  downloadLink.download = fileName
  downloadLink.style.display = 'none'
  downloadLink.href = blobUrl
  document.body.appendChild(downloadLink)
  downloadLink.click()
  document.body.removeChild(downloadLink)
}
