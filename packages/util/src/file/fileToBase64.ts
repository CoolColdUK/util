export default function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      // The result will be a base64 string including the data URL prefix
      // We split on the comma and take the second part to get just the base64 data
      const base64String = (reader.result as string).split(',')[1];
      resolve(`${file.name}|${file.type}|${base64String}`);
    };

    reader.onerror = (error) => {
      reject(error);
    };

    // Read the file as a data URL, which will give us base64 encoded content
    reader.readAsDataURL(file);
  });
}
