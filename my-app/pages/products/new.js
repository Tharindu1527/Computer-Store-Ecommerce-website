import ProductForm from "@/components/ProductForm";
import Layout from "@/components/Layout";

export default function NewProduct(){{/* Actually this is when we click add new button then it goes to another page */}
    return (
        <Layout>
            <h1>New Product</h1>
            <ProductForm />
        </Layout>
    );
}