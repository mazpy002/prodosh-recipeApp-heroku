import classes from "./FormCard.module.css";


function FormCard(props)
{
    return(<div className={classes.formCard}>
        {props.children}
    </div>

    );
}

export default FormCard;