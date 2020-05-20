const INITIAL_STATE = {
  sections: [
    {
      title: "Resin Incense Holders",
      imageUrl:
        "https://res.cloudinary.com/dn86efula/image/upload/v1588426870/5994AC4B-41AE-40E9-A589-5C8112567E16_trcisv.jpg",
      id: 1,
      size: "large",
      linkUrl: "shop/incense-holders",
    },
    {
      title: "Ceramic Coasters",
      imageUrl:
        "https://res.cloudinary.com/dn86efula/image/upload/v1588426795/62C124CF-D50F-4023-97D5-2313F98E6208_jrdp58.jpg",
      id: 2,
      size: "large",
      linkUrl: "shop/ceramic-coasters",
    },
    {
      title: "Resin Coasters",
      imageUrl:
        "https://res.cloudinary.com/dn86efula/image/upload/v1588426809/CAA49E7E-D6AE-4D82-8528-D60B6A24BA3E_iqe9gq.jpg",
      id: 3,
      size: "large",
      linkUrl: "shop/resin-coasters",
    },
    {
      title: "Alcohol Ink Paintings",
      imageUrl:
        "https://res.cloudinary.com/dn86efula/image/upload/v1588426806/E2846469-2EA3-4015-B272-BBE55E5722AC_jxecwd.jpg",
      id: 4,
      size: "large",
      linkUrl: "shop/paintings",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
