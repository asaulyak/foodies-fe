import { UserInfo } from '../../components/UserInfo/UserInfo';
import css from './User.module.css';

export const User = () => (
  <>
    {/* Header */}
    <div className={css.containerUser}>
      <h1 className={css.title}>User</h1>
      <UserInfo></UserInfo>
      {/* Component User info */}
      {/* Component log out */}
      {/* Component TabsList */}
      {/* Component ListItems */}
    </div>
  </>
);
