import Head from "next/head";
import TermsOfUse from "@/components/terms-of-use/terms-of-use";

const TermsOfUsePage = () => {

    return (
        <div>
            <Head>
                <title>Terms of Use</title>
            </Head>
            <TermsOfUse />
        </div>
    );
};

export default TermsOfUsePage;