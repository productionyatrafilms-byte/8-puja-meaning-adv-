// Single source of truth for every visible text on index.html, points.html and
// pranam.html. Each entry holds the same text in english / hindi / gujrati;
// text.js writes the three <span class="english|hindi|gujrati"> into every
// element carrying data-text="<path>", and custom.js shows the chosen one.
//
// English is copied from the Figma frames. Hindi and Gujarati were written for
// this project (Figma carries English only) — have a native reader check the
// Jain terms before release.
//
// "<br>" marks a line break from the Figma text boxes.

var SITE_DATA = {
  home: {
    title: {
      english: "Asthaprakari<br>Puja<br>Meaning",
      hindi: "अष्टप्रकारी<br>पूजा<br>का अर्थ ",
      gujrati: "અષ્ટપ્રકારી<br>પૂજા<br>ના અર્થ",
    },

    caption: {
      english:
        "Eightfold worship ritual of the Tirthankar<br>in the Jin Mandir is Known as Asthaprakari Puja",
      hindi:
        "जिन मंदिर में तीर्थंंकर की आठ प्रकार की पूजा के<br>अनुष्ठान को अष्टप्रकारी पूजा कहते हैं |",
      gujrati:
        "દેરાસરમાં તીર્થંકરની આઠ પ્રકારની પૂજા કરાય છે ,<br>તેને અષ્ટપ્રકારી પૂજા કહેવામાં આવે છે.",
    },
  },

  pointsPage: {
    title: {
      english: "Asthaprakari Puja Meaning",
      hindi: "अष्टप्रकारी पूजा का अर्थ ",
      gujrati: "અષ્ટપ્રકારી પૂજા ના અર્થ",
    },
  },

  // The eight pujas, in order. `label` is the badge on index.html, `name` the
  // heading on points.html, `meaning` the text plate under the slider.

  pujas: [
    {
      label: {
        english: "1<br>Jal<br>Puja",
        hindi: "1<br>जल<br>पूजा",
        gujrati: "1<br>જળ<br>પૂજા",
      },
      name: {
        english: "Jal Puja",
        hindi: "जल पूजा",
        gujrati: "જળ પૂજા- શુદ્ધતા",
      },
      meaning: {
        english:
          "‘O Prabhu! You are pure. There may be no need for your Abhishek, but my Prabhu, I wish to become pure by worshiping you with water, washing away the dirt of my soul, I mean the dirt of my deeds.’",
        hindi:
          "‘हे प्रभु ! आप तो शुद्ध ही हो। आपका अभिषेक करने की कोई आवश्यकता नहीं है, किन्तु मेरे नाथ ! आपकी जल पूजा करने से मेरी आत्मा का मैल, यानि अपने कर्म - मैल को धोकर मैं निर्मल बनना चाहता हूँ।’",
        gujrati:
          "‘હે ભગવાન ! તમે શુદ્ધ છો. તમને અભિષેકની જરૂર નથી, પણ મારા પ્રભુ! તમારી જળ પૂજા કરીને હું મારા આત્માની મલિનતા એટલે કે મારા કર્મોની મલિનતાને ધોઈને પવિત્ર બનવા માંગુ છું.’",
      },
    },
    {
      label: {
        english: "2<br>Chandan<br>Puja",
        hindi: "2<br>चंदन<br>पूजा",
        gujrati: "2<br>ચંદન<br>પૂજા",
      },
      name: {
        english: "Chandan Puja",
        hindi: "चंदनपूजा",
        gujrati: "ચંદન પૂજા - (શાંતિ) સમતા",
      },
      meaning: {
        english:
          "‘O Prabhu! I am worshipping you with Chandan (sandalwood) to cool my soul, which is burning because of the four Kashays.’",
        hindi:
          "‘हे प्रभु ! मेरी आत्मा 4 कषायों से जल रही है, अपनी आत्मा को शीतल बनाने के लिए मैं आपकी चंदन पूजा करता हूँ।’",
        gujrati:
          "‘હે પ્રભુ ! તમારી ચંદન પૂજા કરીને ચાર કષાયોથી બળતા મારા આત્માને ઠંડક આપો.’",
      },
    },
    {
      label: {
        english: "3<br>Phool<br>Puja",
        hindi: "3<br>पुष्प<br>पूजा",
        gujrati: "3<br>પુષ્પ<br>પૂજા",
      },
      name: {
        english: "Phool Puja",
        hindi: "पुष्प पूजा",
        gujrati: "પુષ્પ પૂજા (ફૂલ પૂજા) - (દયા) કરુણા",
      },
      meaning: {
        english:
          "‘O Prabhu, my soul is filled with the stench of Mithyatva (falsehood). By worshipping you with flowers, may my soul is be filled with the fragrance of Samyaktva (equanimity). May I have love and compassion for all living beings.’",
        hindi:
          "‘हे प्रभु मेरी आत्मा पर मिथ्यात्व रूपी दुर्गंध फैली हुई है। आपकी पुष्प पूजा करने से सम्यक्त्व रूपी सुगंध से मेरी आत्मा महक उठे। पुष्प की तरह सभी जीवों के प्रति मैं प्रेम और करुणा की भावना रखूं।’",
        gujrati:
          "‘હે પ્રભુ, મારા આત્મામાં મિથ્યાત્વની દુર્ગંધ ફેલાઈ ગઈ છે. તમારી પુષ્પ પૂજા કરવાથી મારો આત્મા સમ્યક્ત્વ ની સુવાસથી ભરાઈ જાય. બધા જીવો માટે હું ફૂલની જેમ પ્રેમ અને કરુણા રાખી શકું.’",
      },
    },
    {
      label: {
        english: "4<br>Dhoop<br>Puja",
        hindi: "4<br>धूप<br>पूजा",
        gujrati: "4<br>ધૂપ<br>પૂજા",
      },
      name: {
        english: "Dhoop Puja",
        hindi: "धूप पूजा",
        gujrati: "ધૂપ પૂજા - નિઃસ્વાર્થ સેવા",
      },
      meaning: {
        english:
          "‘Oh Prabhu! By worshipping you with Dhoop, may the stench of my Mithyatva (falsehood) be removed and the form of the soul be revealed. Even when the Dhoop burns itself, it gives fragrance to others. I also wish to serve all living beings selflessly.’",
        hindi:
          "‘हे प्रभु ! आपकी धूप पूजा करने से मेरी मिथ्यात्व की दुर्गंध दूर हो और आत्मा का स्वरूप प्रगट हो। धूप स्वयं जलके भी दूसरों को सुंगध देता है। मेरी भी कामना है कि मैं भी सभी जीवों की निः स्वार्थ सेवा करूं।’",
        gujrati:
          "‘હે ભગવાન ! તમારી ધૂપ પૂજા કરવાથી મારી મિથ્યાત્વની દુર્ગંધ દૂર થાય અને આત્માનું સ્વરૂપ પ્રગટ થાય. ધૂપ પોતે બાળ્યા પછી પણ બીજાને સુગંધ આપે છે. હું પણ તમામ જીવોની નિઃસ્વાર્થ સેવા કરી શકું.’",
      },
    },
    {
      label: {
        english: "5<br>Deepak<br>Puja",
        hindi: "5<br>दीपक<br>पूजा",
        gujrati: "5<br>દીપક<br>પૂજા",
      },
      name: {
        english: "Deepak Puja",
        hindi: "दीपक पूजा",
        gujrati: "દીપક પૂજા - યોગ્ય જ્ઞાન",
      },
      meaning: {
        english:
          "‘The nature of a Deepak is to give light. Oh Prabhu! By worshipping you with a Deepak, the light of your knowledge in the form of Kevalgyan should shine in my life as well, and the darkness of ignorance should be dispelled.’",
        hindi:
          "‘दीपक का स्वभाव है उजाला देना। हे प्रभु ! आपकी दीपक पूजा करने से आपके केवलज्ञान रूपी ज्ञान का उजाला मेरे जीवन में भी हो और अज्ञान का अंधकार दूर हो जाए।’",
        gujrati:
          "‘દીવાની પ્રકૃતિ પ્રકાશ આપવાની છે. હે ભગવાન ! આપની દીપક પૂજા કરવાથી આપના જ્ઞાનનો પ્રકાશ મારા જીવનમાં પણ પ્રગટે અને અજ્ઞાનનો અંધકાર દૂર થાય.’",
      },
    },
    {
      label: {
        english: "6<br>Akshat<br>Puja",
        hindi: "6<br>अक्षत<br>पूजा",
        gujrati: "6<br>અક્ષત<br>પૂજા",
      },
      name: {
        english: "Akshat Puja",
        hindi: "अक्षत पूजा",
        gujrati: "અક્ષત પૂજા",
      },
      meaning: {
        english:
          "‘O Prabhu! Like Akshat, I also do not want to take birth again. Now I have to break this web of birth and death. Like you, I also want to become pure.’",
        hindi:
          "‘हे प्रभु ! अक्षत के समान मुझे भी अब जन्म नहीं लेना है। जन्म मरण का यह जंजाल अब मुझे तोड़ना है। आप जैसा मुझे भी शुद्ध बन जाना है।’",
        gujrati:
          "‘ઓહ ભગવાન ! અક્ષતની જેમ મારે પણ હવે જન્મ લેવો નથી. હવે મારે આ જન્મ-મરણની સાકળ તોડવી છે. તમારી જેમ મારે પણ શુદ્ધ બનવું છે.’",
      },
    },
    {
      label: {
        english: "7<br>Naivedya<br>Puja",
        hindi: "7<br>नैवेद्य<br>पूजा",
        gujrati: "7<br>નૈવેદ્ય<br>પૂજા",
      },
      name: {
        english: "Naivedya Puja",
        hindi: "नैवेद्य पूजा",
        gujrati: "નૈવેદ્ય પૂજા - કોઈ ખોરાક નહીં (અણહારી)",
      },
      meaning: {
        english:
          "‘Prabhu! You are Anahari ; you do not need any food. But if my attachment towards food goes away, I also attain the status of Anahari, so I worship you.’",
        hindi:
          "‘प्रभु ! आप तो अणाहारी हैं, आपको किसी खाद्य की जरूरत नहीं, परंतु मेरी आहार संज्ञा दूर हो, मैं भी अणाहारी पद प्राप्त करुँ, इसलिए मैं आपकी नैवेद्य पूजा कर रहा हूँ।’",
        gujrati:
          "‘પ્રભુ! તમે અણાહારી છો, આપને કોઈ ખોરાકની જરૂર નથી, પણ મારી આહાર સંજ્ઞા દૂર થાય, મને અણાહારીનું પદ મળે, તેથી જ હું તમારી નૈવેદ્ય પૂજા કરું છું.’",
      },
    },
    {
      label: {
        english: "8<br>Fal<br>Puja",
        hindi: "8<br>फल<br>पूजा",
        gujrati: "8<br>ફળ<br>પૂજા",
      },
      name: {
        english: "Fal Puja",
        hindi: "फल पूजा",
        gujrati: "ફળ પૂજા",
      },
      meaning: {
        english:
          "‘O Prabhu! The final product of a tree is fruit. By worshipping you with fruit, may I also get the final fruit of life - 'Moksha'.’",
        hindi:
          "‘हे प्रभु ! वृक्ष का अंतिम उत्पाद फल होता है। आपकी फल पूजा करने से मुझे भी जीवन का अंतिम फल - 'मोक्ष' प्राप्त हो।’",
        gujrati:
          "‘હે ભગવાન! વૃક્ષનું અંતિમ ઉત્પાદન ફળ છે. તમારી ફળ પૂજા કરીને મને પણ જીવનનું અંતિમ ફળ - 'મોક્ષ' મળે.’",
      },
    },
  ],

  pranam: {
    title: {
      english: "Pranam",
      hindi: "प्रणाम",
      gujrati: "પ્રણામ",
    },
    homeLabel: {
      english: "HOME",
      hindi: "होम",
      gujrati: "ઘર",
    },
    // label on the arrow shown on the last slide of points.html
    arrowLabel: {
      english: "Pranam",
      hindi: "प्रणाम",
      gujrati: "પ્રણામ",
    },
  },
};
