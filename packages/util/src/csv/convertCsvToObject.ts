/**
 * Convert a csv string into object
 * @param csv
 * @returns
 */
export function convertCsvToObject(csv: string, emptyCell: any = null): Record<string, any>[] {
  const lines = csv
    .split('\n')
    .map((line) => line.trim().replace('\r', ''))
    .filter((line) => line);
  if (lines.length < 2) return [];

  const headers = (lines[0] as string)
    .split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/) // Handles quoted fields properly
    .map((header) => header.replace(/^"|"$/g, '').trim().replace('\r', ''));

  return lines.slice(1).map((line) => {
    const values = line.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/).map((value) => {
      const trimmed = value.replace(/^"|"$/g, '').trim();
      if (trimmed.length === 0) return undefined;
      return isNaN(Number(trimmed)) ? trimmed : Number(trimmed);
    });

    return headers.reduce(
      (obj, header, index) => ({...obj, [header]: values[index] !== undefined ? values[index] : emptyCell}),
      {} as Record<string, any>,
    );
  });
}
