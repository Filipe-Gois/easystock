
import { PrimeReactProvider } from 'primereact/api';

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <PrimeReactProvider>
            {children}
        </PrimeReactProvider>
    );
};

export default Providers;