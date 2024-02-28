
export default function Card(props){
    const style = {
        width: '300px',
        height: '150px',
        marginRight: '25px',
        
    }
    const fontStyle = {
        fontSize: '1.4rem',
        marginBottom: '20px',
        fontWeight: '600'
    }
    const linkStyle = {
        textDecoration: 'none',
        fontWeight: '300'
    }
    return(
        <div class="shadow p-3 mb-3 bg-body rounded" style={style}>
            <div class="card-body d-flex justify-content-between">
                <div>
                    <h4 className="card-title" style={fontStyle}>{props.title}</h4>
                    <h4 className="card-subtitle text-primary" >{props.data}</h4>
                    <a href="#" className="card-link text-muted" style={linkStyle}>{props.about}</a>
                </div>
                <div>
                    image
                </div>
            </div>
        </div>
    )
}