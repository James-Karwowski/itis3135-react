import treePic from './james-at-uncc-next-to-tree.jpg';

export default function Introduction() {
    document.title = "Introduction";
    return (
        <>
            <h2>Introduction</h2>

            <figure>
                <img
                    src={treePic}
                    alt="James at UNCC next to a tree."
                />
                <figcaption>James at UNCC next to a tree.</figcaption>
            </figure>
            <ul>
                <li>
                    <p className="list">
                        My name is James D. Karwowski-Mulready…
                    </p>
                </li>

                <li>
                    <p className="list">
                        <em>Personal Background:</em> I was born in Connecticut…
                    </p>
                </li>

                <li>
                    <p className="list">
                        <em>Professional Background:</em> I have worked one job…
                    </p>
                </li>

                <li>
                    <p className="list">
                        <em>Academic Background:</em> I am a Computer Science…
                    </p>
                </li>

                <li>
                    <p className="list">
                        <em>Primary Computer:</em> Dell Inspiron 15…
                    </p>
                </li>

                <li>
                    <p className="list"><em>Courses I’m Taking, and Why:</em></p>

                    <ul>
                        <li>
                            <p className="list">
                                <em>ITSC3688 - Computers and Their Impact on Society:</em> Required.
                            </p>
                        </li>

                        <li>
                            <p className="list">
                                <em>ITSC2600 - Computing Professionals II:</em> Required.
                            </p>
                        </li>

                        <li>
                            <p className="list">
                                <em>STAT2122 - Intro to Probability & Statistics:</em> Required to graduate.
                            </p>
                        </li>
                    </ul>
                </li>
            </ul>
        </>
    );
}