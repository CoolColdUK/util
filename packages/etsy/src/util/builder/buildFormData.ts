/**
 * build form data for file transfer
 * @param data
 * @returns
 */
export function buildFormData(data: Record<string, any>): FormData {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value);
  });

  return formData;
}
