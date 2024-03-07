export default function DonePage(props) {
    const {setIsDone, setCount, setTotalCount} = props;
    return(
    <div className="donePage">
      <h1>DONE!</h1>

      <button className="donePage__button" onClick={()=>{
        setIsDone(false);
        setCount(0);
        setTotalCount(0);
      }}>VOLTAR</button>
    </div>
    )
}