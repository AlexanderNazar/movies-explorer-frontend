import TitleSection from '../TitleSection/TitleSection';
import photo from '../../../images/MyPhoto.jpg'
import './AboutMe.css';


function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <TitleSection title="Студент" />
      <div className="about-me__card">
        <img src={photo} alt="Фото Александра Назарова" className="about-me__photo" />
        <h3 className="about-me__name">Александр</h3>
        <h4 className="about-me__speciality">Фронтенд-разработчик, 30 лет</h4>
        <p className="about-me__description">
          Я родился и живу в Липецке, отучился на промышленного теплоэнергетика в ЛГТУ.
          У меня есть жена, две дочки и младенец сын. Я много читаю и постоянно учусь.
          Работаю инженером по обслуживанию слаботочных систем.
          Умение создавать Веб-интерфейсы и работать с базами данных откроет передо мной новые горизонты.
        </p>
        <a href="https://github.com/AlexanderNazar" className="about-me__link-git" target="_blank" rel="noreferrer">Github</a>
      </div>
    </section>
  );
}

export default AboutMe;
