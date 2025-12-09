import styles from './page.module.css';
import FrameVideo from 'src/components/iframeVideo/FrameVideo';
import SideBar from 'src/components/mobileSideBar/SideBar';

export default function Home() {

	return (
		<div className={styles.homeWrap}>
			<main className={styles.main}>
				<aside className={styles.asideCon}>
					<SideBar/>
				</aside>
				<h1>hi</h1>
				<h2>hi</h2>
				<h3>hi</h3>
				<div>
					<FrameVideo/>
				</div>
				<h1>hi</h1>
				<h2>hi</h2>
				<h3>hi</h3>
				<h1>hi</h1>
				<h2>hi</h2>
				<h3>hi</h3>
			</main>
		</div>
	);
}
