import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Headphones",
    img: "https://img.freepik.com/free-photo/headphones-smartphone-colorful-background_23-2148210401.jpg?w=1060&t=st=1684579012~exp=1684579612~hmac=78ebc612edadf94b1ee478a7f298adfa880a69411cc549eca4c7162a6324b720",
  },

  {
    _id: uuid(),
    categoryName: "Bluetooth Speakers",
    img: "https://img.freepik.com/free-photo/high-angle-smart-speaker-home_23-2150171767.jpg?w=996&t=st=1684579342~exp=1684579942~hmac=e2eb5d5d0a166f6cd983ad2efbf868481fc9d8831ece00ef913b4a638fe4800b",
  },
  {
    _id: uuid(),
    categoryName: "SmartWatches",
    img: "https://img.freepik.com/free-vector/realistic-fitness-trackers_23-2148530529.jpg?w=740&t=st=1684579512~exp=1684580112~hmac=3822dacd0039a4bfb028d8843c927f0de142ee1c7e9fe3e41ba56090b81a071a",
  },

  {
    _id: uuid(),
    categoryName: "Wireless Earbuds",
    img: "https://img.freepik.com/free-photo/closeup-shot-white-wireless-headphones-with-their-case-white-background_181624-31412.jpg?w=1060&t=st=1684579646~exp=1684580246~hmac=d7916c9b2e1b47b91db9ca35e8a52ec4c15dce834708da492986610fceb2a9df",
  },
];
