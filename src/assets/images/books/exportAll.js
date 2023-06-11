import requireContext from 'require-context.macro';

function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
const images = importAll(requireContext('./', false, /\.jpg/));

export default images;