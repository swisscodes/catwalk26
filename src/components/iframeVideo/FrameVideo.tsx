import styles from "./iframe.module.css"

export default function FrameVideo() {
	return (
		<div className={styles.videoContainer}>
			<iframe
				width='1840'
				height='782'
				src='https://www.youtube.com/embed/-S3bYgqT_fA?&autoplay=1&mute=1'
				title='702 Miles To Freedom ( Freedom House )'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				referrerPolicy='strict-origin-when-cross-origin'
				allowFullScreen
			></iframe>
		</div>
	);
}
