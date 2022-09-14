const importAll = (r)=>{
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
  
export const allImages = importAll(require.context('../../public/images', false, /\.(png|jpe?g|svg)$/));

