
function InfoModal(props)
{
    
    return (<div className="infoModal">
        
        <button className="closeBtn btn btn-warning" onClick={props.onCancel}>Close</button>
    </div>);
}

export default InfoModal;