import { useState, useMemo } from "react";
import introData from "./data_introductions.json";

export default function AllIntroductions() {
    document.title = "ITIS3135 | All Introductions";

    const [search, setSearch] = useState("");
    const [visibleFields, setVisibleFields] = useState({
        name: true,
        mascot: true,
        image: true,
        personalStatement: true,
        backgrounds: true,
        classes: true,
        extraInformation: true,
        quote: true,
        links: true,
    });

    const [index, setIndex] = useState(0);

    // Filter students by name
    const filtered = useMemo(() => {
        return introData.filter((s) => {
            const full =
                `${s.name.first} ${s.name.middleInitial || ""} ${s.name.last}`
                    .toLowerCase();
            return full.includes(search.toLowerCase());
        });
    }, [search]);

    // Slide navigation
    const handlePrev = () => {
        setIndex((i) => (i === 0 ? filtered.length - 1 : i - 1));
    };

    const handleNext = () => {
        setIndex((i) => (i === filtered.length - 1 ? 0 : i + 1));
    };

    // Checkbox toggle
    const toggleField = (field) => {
        setVisibleFields((prev) => ({ ...prev, [field]: !prev[field] }));
    };

    const current = filtered[index] ?? null;

    return (
        <>
            <h2>All Introductions</h2>

            {/* CHECKBOX CONTROLS */}
            {Object.keys(visibleFields).map((field) => (
                <span key={field} style={{ marginRight: "10px" }}>
                    <input
                        type="checkbox"
                        id={field}
                        checked={visibleFields[field]}
                        onChange={() => toggleField(field)}
                    />
                    <label htmlFor={field}>{field}</label>
                </span>
            ))}

            {/* SEARCH INPUT */}
            <div style={{ marginTop: "1em" }}>
                <label htmlFor="search">Search</label>
                <input
                    type="text"
                    id="search"
                    placeholder="Search introductions..."
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setIndex(0);
                    }}
                    style={{ marginLeft: "8px" }}
                />
            </div>

            {/* COUNTER */}
            <p>
                Matching Introductions: <strong>{filtered.length}</strong>
            </p>

            {/* SLIDESHOW CONTROLS */}
            {filtered.length > 0 && (
                <div style={{ marginBottom: "1em" }}>
                    <button onClick={handlePrev}>Prev</button>
                    <button style={{ marginLeft: "10px" }} onClick={handleNext}>
                        Next
                    </button>
                </div>
            )}

            <hr />

            {/* INTRO DISPLAY */}
            {current ? (
                <section key={current.prefix} className="intro-section">
                    {visibleFields.name && (
                        <h3>
                            {current.name.first}{" "}
                            {current.name.middleInitial &&
                                current.name.middleInitial + " "}
                            {current.name.last}
                        </h3>
                    )}

                    {visibleFields.image && current.media?.hasImage && (
                        <figure>
                            <img
                                src={`https://dvonb.xyz${current.media.src}`}
                                alt={current.media.caption}
                                className="intro-image"
                            />
                            <figcaption>{current.media.caption}</figcaption>
                        </figure>
                    )}

                    {visibleFields.personalStatement && (
                        <p>{current.personalStatement}</p>
                    )}

                    {visibleFields.backgrounds && (
                        <ul>
                            <li>
                                <p>
                                    <strong>Personal Background:</strong>{" "}
                                    {current.backgrounds.personal}
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Professional Background:</strong>{" "}
                                    {current.backgrounds.professional}
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Academic Background:</strong>{" "}
                                    {current.backgrounds.academic}
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Primary Computer:</strong>{" "}
                                    {current.platform.device},{" "}
                                    {current.platform.os}
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Subject Knowledge:</strong>{" "}
                                    {current.backgrounds.subject}
                                </p>
                            </li>
                        </ul>
                    )}

                    {visibleFields.classes && (
                        <ul>
                            <li>
                                <p>
                                    <strong>Courses I'm Taking:</strong>
                                </p>
                                <ul>
                                    {current.courses.map((course) => (
                                        <li key={course.code}>
                                            <p>
                                                <strong>
                                                    {course.dept}
                                                    {course.num} – {course.name}
                                                    :
                                                </strong>{" "}
                                                {course.reason}
                                            </p>
                                            </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    )}

                    {visibleFields.quote && (
                        <p>
                            <strong>Favorite Quote:</strong> “
                            {current.quote.text}” — {current.quote.author}
                        </p>
                    )}

                    {visibleFields.extraInformation && (
                        <p>
                            <strong>Fun Fact:</strong> {current.funFact}
                        </p>
                    )}

                    {visibleFields.links && (
                        <>
                            <h4>Links</h4>
                            <ul>
                                {Object.entries(current.links).map(
                                    ([key, value]) => (
                                        <li key={key}>
                                            <a
                                                href={value}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {key}
                                            </a>
                                        </li>
                                    )
                                )}
                            </ul>
                        </>
                    )}

                    <hr />
                </section>
            ) : (
                <p>No matching introductions found.</p>
            )}
        </>
    );
}