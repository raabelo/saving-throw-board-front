import PageWrapper from "../components/layouts/PageWrapper";
import TableTop from "../components/layouts/TableTop";

// import RandomMap1 from "../assets/random/random-map-1.jpg";
import RandomMap2 from "../assets/random/random-map-2.jpg";

const TableManager: React.FC = () => {
    return (
        <PageWrapper>
            <TableTop imageSrc={RandomMap2} />
        </PageWrapper>
    );
};

export default TableManager;
