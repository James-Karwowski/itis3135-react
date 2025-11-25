import introData from "./data_introductions.json";

export default function AllIntroductions() {
    document.title =
        "ITIS3135 | All Introductions";

    return (
        <>
            <h2>All Introductions</h2>

            {introData.map((student) => (
                imageUrl = student.media?.hasImage
                    ? `https://dvonb.xyz${student.media.src}`
                    : null,
                
                <section key={student.prefix} className="intro-section">
                    <h3>
                        {student.name.first}{" "}
                        {student.name.middleInitial && student.name.middleInitial + " "}
                        {student.name.last}
                    </h3>

                    {student.media?.hasImage && (
                        <figure>
                            <img
                                src={imageUrl}
                                alt={student.media.caption}
                                className="intro-image"
                            />
                            <figcaption>{student.media.caption}</figcaption>
                        </figure>
                    )}

                    <p>{student.personalStatement}</p>

                    <ul>
                        <li>
                            <p><strong>Personal Background:</strong> {student.backgrounds.personal}</p>
                        </li>
                        <li>
                            <p><strong>Professional Background:</strong> {student.backgrounds.professional}</p>
                        </li>
                        <li>
                            <p><strong>Academic Background:</strong> {student.backgrounds.academic}</p>
                        </li>
                        <li>
                            <p><strong>Primary Computer:</strong> {student.platform.device}, {student.platform.os}</p>
                        </li>
                        <li>
                            <p><strong>Subject Knowledge:</strong> {student.backgrounds.subject}</p>
                        </li>

                        <li>
                            <p><strong>Courses I'm Taking:</strong></p>
                            <ul>
                                {student.courses.map((course) => (
                                    <li key={course.code}>
                                        <p>
                                            <strong>{course.dept}{course.num} – {course.name}:</strong>{" "}
                                            {course.reason}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        <li>
                            <p>
                                <strong>Favorite Quote:</strong> “{student.quote.text}” — {student.quote.author}
                            </p>
                        </li>

                        <li>
                            <p><strong>Fun Fact:</strong> {student.funFact}</p>
                        </li>
                    </ul>

                    <h4>Links</h4>
                    <ul>
                        {Object.entries(student.links).map(([key, value]) => (
                            <li key={key}>
                                <a href={value} target="_blank" rel="noopener noreferrer">
                                    {key}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <hr />
                </section>
            ))}
        </>
    );
}