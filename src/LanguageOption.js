

const LanguageOption = (props) =>{
    return (
        <div>
            <label htmlFor="language">选择输入语言:</label>
            <select id="language" value={props.selectedLanguage} onChange={props.handleLanguageChange}>
                <option value={0}>简体中文</option>
                <option value={1}>繁體中文</option>
                <option value={2}>English</option>
            </select>
        </div>
    )
}

export default LanguageOption