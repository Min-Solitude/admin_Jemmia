import { useGetAuthUserQuery } from '@/redux/services/userService';

const DashboardScreen: React.FC = () => {
    const { data, isLoading } = useGetAuthUserQuery({});
    console.log(data, isLoading);

    return <div>dashboard</div>;
};

export default DashboardScreen;
