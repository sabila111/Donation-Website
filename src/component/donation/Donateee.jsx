
const Donateee = ({donate}) => {

    const {id,Picture,Title,Category,Category_bg,Description,Price,Card_bg,Text_color } = donate|| {}
    return (
        <div style={{background:Card_bg}} className="flex justify-start items-start mt-10 ml-5 rounded-lg">
        <div>
            <img className="h-[220px] w-[220px]" src={Picture} alt="" />
        </div>
        <div >
            <p style={{background:Category_bg, color:Text_color}} className="text-left text-2xl ml-2 mt-5">{Category}</p>
            <h2  className="text-left text-2xl ml-2 mt-2">{Title}</h2>
            <p style={{ color:Text_color}} className="text-left text-2xl ml-2 mt-2">{Price}</p>
            <button className="text-white rounded-lg p-4 mt-5" style={{background:Text_color}}>view details</button>
        </div>
        </div>
    );
};

export default Donateee;