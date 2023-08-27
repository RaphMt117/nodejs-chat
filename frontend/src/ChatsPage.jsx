import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div className='background'>
            <PrettyChatWindow
                projectId='d0526c92-3388-4a16-8eac-29c24a09a096'
                username={props.user.username}
                secret={props.user.secret}
                style={{height: '100%'}}
            />
        </div>
    )
}

export default ChatsPage
