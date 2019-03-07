export function mailPage() {
    const linkNode = document.getElementById('mail-link');
    const currentURL = window.location.href;
    const existingQuery = window.location.hash.slice(1);
    const searchParams = new URLSearchParams(existingQuery);
    const searchTerm = searchParams.get('q');
    const term = searchTerm.toString();
    const mailPage = `mailto:?subject=FWD:News%20stories%20about%20${term}&body=Thought%20you%20might%20enjoy%20these%20articles:%20${currentURL}`;

    linkNode.href = mailPage;
}


function mailArticle() {

}