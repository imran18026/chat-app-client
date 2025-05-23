export const fileUploadToCloudinary = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  const res = await fetch("/api/upload", { method: "POST", body: formData });
  const data = await res.json();
  return data.secure_url;
};
