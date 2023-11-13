import Dialog from '../components/dialog';
import Conversation from '../components/conversation';
import Header from '../components/header';

const conversationData = [
    {
        sender: {
            firstName: 'Trevis',
            lastName: 'Barker',
            avatar: 'https://randomuser.me/api/portraits/med/men/75.jpg',
        },
        message: 'Hi.',
        createdAt: '2023-11-10 10:00',
    },
    {
        sender: {
            firstName: 'Eleanor',
            lastName: 'Wallace',
            avatar: 'https://randomuser.me/api/portraits/women/11.jpg',
        },
        message: 'Hello',
        createdAt: '2023-11-10 10:05',
    },
];

function Base(props) {
    return (
        <main className="w-full h-screen overflow-hidden">
            <Header conversationData={conversationData} />
            <div className="flex mt-20">
                <Conversation conversationData={conversationData} />
                <Dialog conversationData={conversationData} />
            </div>
        </main>
    );
}

export default Base;
