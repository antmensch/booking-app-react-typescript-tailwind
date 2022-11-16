import SignupForm from "../../../src/components/signup/SignupForm";
import clientPromise from "../../../src/utils/mongodb/mongodb";

export async function getServerSideProps() {
    try {
        const client = await clientPromise;
        const db = client.db("sample_airbnb");

        const list = await db
            .collection("listingsAndReviews")
            .find()
            .limit(5)
            .toArray();

        const hotelJSON = JSON.parse(JSON.stringify(list));

        return {
            props: {
                hotels: hotelJSON,
            },
        };
    } catch (e) {
        console.error(e);
    }
}

function SignupPage(props: any) {
    console.log(props);
    return (
        <div className="h-screen">
            <div className="flex h-screen justify-center overflow-scroll pt-32 dark:bg-darkGray-200">
                <div className="w-1/2 md:w-1/3">
                    <SignupForm />
                </div>
            </div>
        </div>
    );
}

export default SignupPage;
