import css from './UserInfo.module.css';

export const UserInfo = () => (
  <>
    <div className={css.userWrap}>
      <div className={css.userImgWrap}>
        <img
          className={css.userImg}
          src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
          alt=""
        />
        <button className={css.userImgBtn}>
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.5 3.3335V12.6668"
              stroke="white"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.83398 8H13.1673"
              stroke="white"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <p className={css.userName}>My Name</p>
      <ul className={css.userDetails}>
        <li className={css.userDetailInfo}>
          Email:
          <span className={css.userDetailsInfoNumber}>
            555dfvsdfvdsfvdsfvdsfvsdfvsdfvdsd
          </span>
        </li>
        <li className={css.userDetailInfo}>
          Added recipes:
          <span className={css.userDetailsInfoNumber}></span>
        </li>
        <li className={css.userDetailInfo}>
          Favorites:
          <span className={css.userDetailsInfoNumber}></span>
        </li>
        <li className={css.userDetailInfo}>
          Followers:
          <span className={css.userDetailsInfoNumber}></span>
        </li>

        <li className={css.userDetailInfo}>
          Following:
          <span className={css.userDetailsInfoNumber}></span>
        </li>
      </ul>
    </div>
  </>
);
