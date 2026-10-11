// Edit the recipient, friend names, images, and letters here before sharing.
export const birthday = { name: 'Htet', tagline: 'The world is a little brighter with you in it.' };
// Put your friend's photo in public/birthday-photo.jpg and set photoSrc below.
export const opening = { age: 22, photoSrc: './birthday-photo.jpg', photoAlt: 'The birthday girl', photoPosition: 'xMidYMid slice' };
export type Friend = {
 id: string; name: string; label: string; color: string; letter: string;
 imageSrc: string; imageFit: 'contain' | 'cover'; imagePosition: string;
};
// Each friend's name, image and letter are editable independently below.
// Put photos in public/friends/ and use './friends/filename.jpg'.
// Use contain for illustrations, cover for portraits; adjust imagePosition to crop.
// Use \n\n between letter paragraphs. IDs must be unique.
export const friends: Friend[] = [
  {
    "id": "Ma Nandar",
    "imageSrc": "./friends/sample-bear.jpeg",
    "imageFit": "contain",
    "imagePosition": "center",
    "name": "Ma Nandar",
    "label": "A little love & a lot of laughter",
    "color": "rose",
    "letter": "Ich wünsche dir einen wundervollen Geburtstag, umgeben von Liebe, Freude und allem, was dir ein Lächeln ins Gesicht zaubert. Du verdienst heute und immer nur das Beste… 🎂✨🥳🎉😘Mama liebt dich"
  },
  {
    "id": "La Wun",
    "imageSrc": "./friends/lawun.png",
    "imageFit": "contain",
    "imagePosition": "center",
    "name": "La Wun",
    "label": "For my favorite human",
    "color": "lavender",
    "letter": "HAPPY BIRTHDAY ပါ!\n\nညီမလေးထက်မြတ်နိုး မွေးနေ့မှစပြီးလိုအင်ဆန္ဒတွေပြည့်ဝပါစေရှင်\n\nWish u all the best love uu 💕✨🥳လူသားအားလုံးအပေါ်များကြီးလည်းပိုချစ်နိုင်ပါစေရှန်🙂"
  },
  {
    "id": "Ma Saung",
    "imageSrc": "./friends/masaung.jpg",
    "imageFit": "contain",
    "imagePosition": "center",
    "name": "Ma Saung",
    "label": "A wish from the heart",
    "color": "peach",
    "letter": "Happy Birthday mama a thel lay 🎁\n\nIch wünsche dir, dass alle deine Wünsche in Erfüllung gehen.Mama love you so much nw 😘😘😘\n\nလိမ်လိမ်မာမာနေပါ အသဲမကွဲပါနဲ့ အမတွေစကားနားထောင်ပါ မမကညီမလေးကိုအချစ်ဆုံးပါ 🙂‍↔️🥳"
  },
  {
    "id": "maphoo",
    "imageSrc": "./friends/maphoo.jpg",
    "imageFit": "contain",
    "imagePosition": "center",
    "name": "Ma Phoo",
    "label": "A little love & a lot of laughter",
    "color": "rose",
    "letter": "Alles Gute zum Geburtstag, Htet Kalay!! 🥳🎂❤️\n\nIch wünsche dir ganz viel Glück, Gesundheit, Geld und natürlich, dass du all deine Ziele erreichst! Mögen all deine Wünsche in Erfüllung gehen und dein Leben voller schöner Momente sein. Bleib so verrückt, wie du bist. Hab einen wunderschönen Tag und genieß deinen Geburtstag! 🥳\n\nDie Schwester ,die du am meisten liebst.\n\nPhoo"
  },
  {
    "id": "anushka",
    "imageSrc": "./friends/anushka.png",
    "imageFit": "contain",
    "imagePosition": "center",
    "name": "Anushka",
    "label": "A little love & a lot of laughter",
    "color": "rose",
    "letter": "HAPPY BIRTHDAY!!\n\n🎉 i miss you so much☹️\n\nama lo chin dr arr lone ya br say😘💗"
  },
  {
    "id": "Ma Kyaye Mone",
    "imageSrc": "./friends/makyayemone.jpg",
    "imageFit": "contain",
    "imagePosition": "center",
    "name": "Ma Kyaye Mone",
    "label": "More memories, please",
    "color": "peach",
    "letter": "Happy Birthday to our little sunshine! 🥳💗\n\nYou’re such a kind, energetic soul who brings so much joy, laughter, and happiness to everyone around you. Never lose that beautiful spark in you, and may your life always be as bright and lovely as the happiness you bring to others.\n\nKeep shining and smiling, little one! 🫶🏻🎂✨"
  },
  {
    "id": "Aung Min",
    "imageSrc": "./friends/aungmin.jpg",
    "imageFit": "contain",
    "imagePosition": "center",
    "name": "Aung Min",
    "label": "More memories, please",
    "color": "peach",
    "letter": "Happy birthday ပါအမထက်မြတ်နိုးရေ\n\nနောက်မှခင်ပင်မဲ့လည်းအရင်လူတွေနဲ့တန်းတူချစ်ပါတယ်ခင်ပါတယ်လို့\n\nwish you all the bestပါဗျ"
  },
  {
    "id": "Thant",
    "imageSrc": "./friends/thant.png",
    "imageFit": "contain",
    "imagePosition": "center",
    "name": "Thant",
    "label": "Something sweet, just for you",
    "color": "rose",
    "letter": "မွေးနေ့မှစပြီး နေ့ရက်တိုင်း ပျော်ရွှင်ကျန်းမာပြီး စိတ်ချမ်းသာပါစေ။\n\nကိုယ်လိုချင်တာတွေ အကောင်အထည်ဖော်နိုင်ပြီး အခက်အခဲတွေကို ခွန်အားနဲ့ ကျော်ဖြတ်နိုင်ပါစေ။ သူငယ်ချင်းဖြစ်‌ကောင်း‌ဖြစ်ပေးတဲ့အတွက် ကျေးဇူးတင်ပါတယ်။ နောက်နှစ်တွေမှာလည်း အမှတ်တရကောင်းတွေ အတူတူဖန်တီးကြရအောင်။\n\nHappy Birthday ပါ ထက်ရေ 🎉🎊❤️"
  },
  {
    "id": "Kyal Sin",
    "imageSrc": "./friends/kyalsin.png",
    "imageFit": "contain",
    "imagePosition": "center",
    "name": "Kyal Sin",
    "label": "To your next beautiful chapter",
    "color": "lavender",
    "letter": "Happy Birthday hmn lay\n\nBday ka sa pee kg dr twy bl amyal ya ny bh sy 🩷🫶🏻\n\nD htk lal po chik pho kg pee eain mhr yw class mhr yw apyin mhr yw bl nay yar fikfik sate m nyik ya bl myal tann Yee nay nai bh sy nor\n\nAmyr kye Chel tik 🤏🏻"
  },
  {
    "id": "bommyat",
    "imageSrc": "./friends/bommyat.png",
    "imageFit": "contain",
    "imagePosition": "center",
    "name": "Bommyat",
    "label": "To your next beautiful chapter",
    "color": "lavender",
    "letter": "Happy birthday 🎁\n\nZum Geburtstag viel Glück ! Viel Spaß & viel Erfolg!!🤍"
  },
  {
    "id": "kosaw",
    "imageSrc": "./friends/kosaw.png",
    "imageFit": "contain",
    "imagePosition": "center",
    "name": "Ko Saw",
    "label": "To your next beautiful chapter",
    "color": "lavender",
    "letter": "Happy day,my dear sister ✨\n\nYou have brought us closer together in our German group.\n\nMay your day be filled countless blessings.Keep shining pr."
  },
  {
    "id": "phyo",
    "imageSrc": "./friends/phyo.png",
    "imageFit": "contain",
    "imagePosition": "center",
    "name": "Phyo",
    "label": "To your next beautiful chapter",
    "color": "lavender",
    "letter": "Since you're such a cheerful person, I hope all your wishes come true ​and always stay happy and healthy 🎉✨"
  },
  {
    "id": "mamyat",
    "imageSrc": "./friends/mamyat.png",
    "imageFit": "contain",
    "imagePosition": "center",
    "name": "Ma Myat",
    "label": "To your next beautiful chapter",
    "color": "lavender",
    "letter": "Alles Gute zum Geburtstag, Süße Htet! 🥳🎂❤️\n\nIch wünsche dir ganz viel Glück, Liebe und natürlich ganz viele Geschenke! 🎁😂\n\nBleib so süß, verrückt und einzigartig, wie du bist! Lass dich heute ordentlich feiern und genieß deinen Tag! 🥰😘🎉"
  }
];
