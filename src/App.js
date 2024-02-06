import "./styles.css";
import { useForm } from "react-hook-form";
import React, {useState} from "react";
import ToggleSwitch from "./ToggleSwitch";
import LanguageOption from "./LanguageOption";

// const Section = (props) => {
//   const {
//     register,
//     formState: { errors }
//   } = useForm();
//   const inputArrayGen = (title, length) => {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//       array.push(title + i);
//     }
//     return array;
//   };

//   const array = inputArrayGen(props.title, props.length);
//   console.log(array);
//   return (
//     <div className={props.title}>
//       <label> title </label>
//       {array.map((item) => (
//         <input {...register(item, { required: true })} />
//       ))}
//     </div>
//   );
// };

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  console.log(selectedLanguage)
  const validate = (title, inputs, results) => {
    let correctCount = 0;
    let message = ""
    let zeroInput = true;
    for (let i = 0; i < results.length; i++) {
      if (inputs[title + i].length > 0) {
        zeroInput = false;
        break;
      }
    }
    if(zeroInput) {
      return {
        gotAll: false,
        correctCount: correctCount,
        message: message,
      };
    }
    for (let i = 0; i < results.length; i++) {
      if (!zeroInput) {
        if (results[i] === inputs[title + i]) {
          correctCount++;
        }
      }
    }
    if(correctCount != results.length && !zeroInput) {
      message = title+"\n";
      for (let i = 0; i < results.length; i++) {
          if (results[i].toLowerCase() === inputs[title + i].trim().toLowerCase()) {
            message += "正确:" + results[i] + "\n";
          } else {
            message += "错误:" + inputs[title + i] + "  正确:" + results[i] + "\n";
          }
      }
    }
    return {
      gotAll: correctCount === results.length,
      correctCount: correctCount,
      message: message,
    };
  };


  function handleLanguageChange(event) {
    setSelectedLanguage(event.target.value);
  }

  const onSubmit = (data) => {

    let correctCount = 0;
    let message = "";
    let result1 = validate("律法书(5)", data, expectedSection1[selectedLanguage]);
    correctCount += result1.correctCount;
    message+= result1.message;
    let result2 = validate("历史书(12)", data, expectedSection2[selectedLanguage]);
    correctCount += result2.correctCount;
    message+= result2.message;
    let result3 = validate("诗歌(5)", data, expectedSection3[selectedLanguage]);
    correctCount += result3.correctCount;
    message+= result3.message;
    let result4 = validate("大小先知书(17)", data, expectedSection4[selectedLanguage]);
    correctCount += result4.correctCount;
    message+= result4.message;
    let result5 = validate("福音书(4)", data, expectedSection5[selectedLanguage]);
    correctCount += result5.correctCount;
    message+= result5.message;
    let result6 = validate("新约历史书(1)", data, expectedSection6[selectedLanguage]);
    correctCount += result6.correctCount;
    message+= result6.message;
    let result7 = validate("保罗书信(13)", data, expectedSection7[selectedLanguage]);
    correctCount += result7.correctCount;
    message+= result7.message;
    let result8 = validate("一般书信(8)", data, expectedSection8[selectedLanguage]);
    correctCount += result8.correctCount;
    message+= result8.message;
    let result9 = validate("先知书(1)", data, expectedSection9[selectedLanguage]);
    correctCount += result9.correctCount;
    message+= result9.message;
    let displayResult = "Final Score: " + correctCount + "/66\n";
    if(message.length > 0) {
      displayResult += "复习点 \n"+ message
    }
    alert(displayResult);
  };
  const sectionGen = (title, length) => {
    let array = [];
    for (let i = 0; i < length; i++) {
      array.push(title + i);
    }
    return { title: title, items: array };
  };
  const section1 = sectionGen("律法书(5)", 5);
  const expectedSection1 = [["创", "出", "利", "民", "申"], ["Gen","Exo","Lev","Num","Deu"], ["创世记", "出埃及记", "利未记", "民数记", "申命记"],["創世記", "出埃及記", "利未記", "民數記", "申命記"],["Genesis","Exodus","Leviticus","Numbers","Deuteronomy"]];
  const section2 = sectionGen("历史书(12)", 12);
  const expectedSection2 = [["书", "士", "得", "撒上", "撒下", "王上", "王下", "代上", "代下", "拉", "尼", "斯"],
        ["Jos","Jdg","Rut","1Sa","2Sa","1Ki","2Ki","1Ch","2Ch","Ezr","Neh","Est"],
      ["约书亚记", "士师记", "路得记", "撒母耳记上", "撒母耳记下", "列王纪上", "列王纪下", "历代志上", "历代志下", "以斯拉记", "尼希米记", "以斯帖记"],
    ["約書亞記", "士師記", "路得記", "撒母耳記上", "撒母耳記下", "列王紀上", "列王紀下", "歷代志上", "歷代志下", "以斯拉記", "尼希米記", "以斯帖記"],
  ["Joshua","Judges","Ruth","1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra","Nehemiah","Esther"]];
  const section3 = sectionGen("诗歌(5)", 5);
  const expectedSection3 = [["伯", "诗", "箴", "传", "歌"], ["Job","Psa","Pro","Ecc","Son"], ["约伯记", "诗篇", "箴言", "传道书", "雅歌"],["約伯記", "詩篇", "箴言", "傳道書", "雅歌"],["Job","Psalms","Proverbs","Ecclesiastes","Song of Songs"]];
  const section4 = sectionGen("大小先知书(17)", 17);
  const expectedSection4 = [["赛", "耶", "哀", "结", "但", "何", "珥", "摩", "俄", "拿", "弥", "鸿", "哈", "番", "该", "亚", "玛"],
    ["Isa","Jer","Lam","Eze","Dan","Hos","Joe","Amo","Oba","Jon","Mic","Nah","Hab","Zep","Hag","Zec","Mal"],
      ["以赛亚书", "耶利米书", "耶利米哀歌", "以西结书", "但以理书", "何西阿书", "约珥书", "阿摩司书", "俄巴底亚书", "约拿书", "弥迦书", "那鸿书", "哈巴谷书", "西番雅书", "哈该书", "撒迦利亚书", "玛拉基书"],
    ["以賽亞書","耶利米書","耶利米哀歌","以西結書","但以理書","何西阿書","約珥書","阿摩司書","俄巴底亞書","約拿書","彌迦書","那鴻書","哈巴谷書","西番雅書","哈該書","撒迦利亞書","瑪拉基書"],
    ["Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel","Hosea","Joel","Amos","Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah","Malachi"]];
  const section5 = sectionGen("福音书(4)", 4);
  const expectedSection5 = [["太", "可", "路", "约"], ["Mat","Mar","Luk","Joh"], ["马太福音", "马可福音", "路加福音", "约翰福音"],["馬太福音","馬可福音","路加福音","約翰福音"],["Matthew","Mark","Luke","John"]];
  const section6 = sectionGen("新约历史书(1)", 1);
  const expectedSection6 = [["徒"], ["Act"], ["使徒行传"],["使徒行傳"],["Acts"]];
  const section7 = sectionGen("保罗书信(13)", 13);
  const expectedSection7 = [["罗", "林前", "林后", "加", "弗", "腓", "西", "帖前", "帖后", "提前", "提后", "多", "门"],
    ["Rom","1Co","2Co","Gal","Eph","Phi","Col","1Th","2Th","1Ti","2Ti","Tit","Phm"],
      ["罗马书", "哥林多前书", "哥林多后书", "加拉太书", "以弗所书", "腓立比书", "歌罗西书", "帖撒罗尼迦前书", "帖撒罗尼迦后书", "提摩太前书", "提摩太后书", "提多书", "腓利门书"],
    ["羅馬書","哥林多前書","哥林多後書","加拉太書","以弗所書","腓立比書","歌羅西書","帖撒羅尼迦前書","帖撒羅尼迦後書","提摩太前書","提摩太後書","提多書","腓利門書"],
  ["Romans","1 Corinthians","2 Corinthians","Galatians","Ephesians","Philippians","Colossians","1 Thessalonians","2 Thessalonians","1 Timothy","2 Timothy","Titus","Philemon"]];
  const section8 = sectionGen("一般书信(8)", 8);
  const expectedSection8 = [["来", "雅", "彼前", "彼后", "约一", "约二", "约三", "犹"],
    ["Heb","Jame","1Pe","2Pe","1Jo","2Jo","3Jo","Jud"],
    ["希伯来书", "雅各书", "彼得前书", "彼得后书", "约翰一书", "约翰二书", "约翰三书", "犹大书"],
    ["希伯來書","雅各書","彼得前書","彼得後書","約翰壹書","約翰貳書","約翰參書","猶大書"],
  ["Hebrews","James","1 Peter","2 Peter","1 John","2 John","3 John","Jude"]];
  const section9 = sectionGen("先知书(1)", 1);
  const expectedSection9 = [["启"], ["Rev"], ["启示录"],["啟示錄"],["Revelation"]];

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
      <React.Fragment>
        <LanguageOption selectedLanguage={selectedLanguage} handleLanguageChange={handleLanguageChange} />
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>旧约</h1>
      <label> {section1.title} </label>
      {section1.items.map((item) => (
        <input {...register(item, { required: false })} />
      ))}
      <label> {section2.title} </label>
      {section2.items.map((item) => (
          <input {...register(item, { required: false })} />
      ))}
      <label> {section3.title} </label>
      {section3.items.map((item) => (
          <input {...register(item, { required: false })} />
      ))}
      <label> {section4.title} </label>
      {section4.items.map((item) => (
          <input {...register(item, { required: false })} />
      ))}
      <h1>新约</h1>
      <label> {section5.title} </label>
      {section5.items.map((item) => (
          <input {...register(item, { required: false })} />
      ))}
      <label> {section6.title} </label>
      {section6.items.map((item) => (
          <input {...register(item, { required: false })} />
      ))}
      <label> {section7.title} </label>
      {section7.items.map((item) => (
          <input {...register(item, { required: false })} />
      ))}
      <label> {section8.title} </label>
      {section8.items.map((item) => (
          <input {...register(item, { required: false })} />
      ))}
      <label> {section9.title} </label>
      {section9.items.map((item) => (
          <input {...register(item, { required: false })} />
      ))}
      <input type="submit" />
    </form>
      </React.Fragment>
  );
}
