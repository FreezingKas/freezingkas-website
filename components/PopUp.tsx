interface PopUpProps {
    alert: boolean;
}

export default function PopUp(props: PopUpProps) {
    const alert : boolean = props.alert;
    
    if (alert === false) {
        return (
            <div class="text-red-500 text-center my-8">Password Incorrect or Invalid File</div>
        )
    } else if(alert === true) {
        return (
            <div class="text-green-500 text-center my-8">File Uploaded</div>
        )
    }
    return(
        <div></div>
    )
}