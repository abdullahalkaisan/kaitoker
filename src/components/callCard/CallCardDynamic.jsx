import CallCard from './CallCard'

export default function CallCardDynamic() {
  const userArray = [
    {
      user_name: "Abdullah Al Kaisan",
      user_profetion: "CEO at Kaitoker",
      user_profilePicture: "https://mui.com/static/images/avatar/1.jpg",
      user_country: "Bangladesh",
      user_country_flag: "bd",
      user_skills: ["MERN stack web developer", "React.js", "Photoshop"],
      user_about:
        "Hey My name is Kaisan Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, magni? Dolorem, aperiam neque pariatur dicta iure facilis aliquid odit ea.",
      user_onlineStatus: "offline",
      user_language: "English",
      user_language_list: ["English", "Bengali", "Hindi"],
      user_accoutType: "vip",
      user_id: 1,
      user_perHourCost: 2.26,
      user_followers: 16543,
      user_rating: 78,
      user_total_call: 2467,
    },
    {
      user_name: "Sky",
      user_profetion: "English Teacher",
      user_profilePicture:
        "https://lh3.googleusercontent.com/a/ACg8ocI8AzUpirpUrg2MUwes_cMa57CzBahoxK9rlLNavDxOhpU",
      user_country: "Vietnam",
      user_country_flag: "vn",
      user_skills: ["Pet", "Vocabularies", "Grammar", "Reading", "Traveller"],
      user_about:
        "Hey My name is Kaisan Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, magni? Dolorem, aperiam neque pariatur dicta iure facilis aliquid odit ea.",
      user_onlineStatus: "offline",
      user_language: "English",
      user_language_list: ["English", "Bengali", "Hindi"],
      user_accoutType: "vip",
      user_id: 1,
      user_perHourCost: 2.26,
      user_followers: 1653,
      user_rating: 99,
      user_total_call: 2467,
    },
    {
      user_name: "Moynuddin",
      user_profetion: "English Teacher",
      user_profilePicture:
        "https://lh3.googleusercontent.com/a/ACg8ocI8AzUpirpUrg2MUwes_cMa57CzBahoxK9rlLNavDxOhpU",
      user_country: "Vietnam",
      user_country_flag: "vn",
      user_skills: ["Pet", "Vocabularies", "Grammar", "Reading", "Traveller"],
      user_about:
        "Hey My name is Kaisan Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, magni? Dolorem, aperiam neque pariatur dicta iure facilis aliquid odit ea.",
      user_onlineStatus: "offline",
      user_language: "English",
      user_language_list: ["English", "Bengali", "Hindi"],
      user_accoutType: "vip",
      user_id: 1,
      user_perHourCost: 2.26,
      user_followers: 1653,
      user_rating: 99,
      user_total_call: 2467,
    },
  ];



  return userArray.map((item) => {
    return <CallCard key={item.user_id} {...item} />;
  });
}

// every item is an object
// object.key is gonna be their value
// for example the whole object key and value will be as copy
// example if we pass the props like user_country_flag = {item.user_flag},
// it will copy form the object as   user_country_flag: "vn",
// so we directly pass all the whole object through one
