export default function SelectOption({options}){
    if(options.length < 1){
        return <></>;
    }
    
    return <>
    {
        options.map((item, index) => (
            <option key={index} value={item}>
                {item}
            </option>
        ))
    }
    </>
}