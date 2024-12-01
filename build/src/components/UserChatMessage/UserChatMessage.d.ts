import './UserChatMessage.css';
import { ICustomComponents } from '../../interfaces/IConfig';
interface IUserChatMessageProps {
    message: string;
    customComponents: ICustomComponents;
    image: any;
    audioFile: any;
}
declare const UserChatMessage: ({ message, customComponents, image, audioFile }: IUserChatMessageProps) => JSX.Element;
export default UserChatMessage;
