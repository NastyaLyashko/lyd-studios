import './VideoPopup.css';

export default function VideoPopup({video, onClose}) {
    if (!video){
        return null
    }

    return (
        <section className={`${video ? "popup_opened" : ""} popup`}>
            <div className="popup__container popup__container_photo">
            <button className="popup__close-button popup__close-button_photo" aria-label="Закрыть" onClick={onClose}></button>
                <div className='popup__video'>
                        <iframe className='popup__iframe'
                                src={video.link} 
                                title={video.title} >
                        </iframe>
                    </div>
                <p className="popup__caption">{video.title}</p>
            </div>
        </section>
    )
}