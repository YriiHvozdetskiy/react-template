export * from './validationSchema/index';
export * from './sort/index';

export const getUrlExtension = (url) => {
   return url
   .split(/[#?]/)[0]
   .split(".")
   .pop()
   .trim();
};

export const onImageEdit = async (imgUrl) => {
   const imgExt = getUrlExtension(imgUrl);

   const response = await fetch(imgUrl);

   const blob = await response.blob();

   return new File([blob], "profileImage." + imgExt, {
      type: blob.type,
   });
};