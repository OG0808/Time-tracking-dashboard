import './profile.css'



export const Profile = ({setTimeFrame}) => {

  



  return (
    <div className="profile__container">
    <section className="profile__header">
      <img className="profile__image" src="src\assets\images\image-jeremy.png" alt="" />
      <div>
        <p className="profile__report">Report for</p>
        <h3 className="profile__name">
          Jeremy Robson
        </h3>
      </div>
    </section>

    <section className="profile__buttons">
      <button
        className="profile__button"
        onClick={() => setTimeFrame({
          daily: "daily",
        })}
      >
        Daily
      </button>
      <button
        className="profile__button"
        onClick={() => setTimeFrame({
          weekly: "weekly",
        })}
      >
        Weekly
      </button>
      <button
        className="profile__button"
        onClick={() => setTimeFrame({
          monthly: "monthly",
        })}
      >
        Monthly
      </button>
    </section>
  </div>
  );
};
