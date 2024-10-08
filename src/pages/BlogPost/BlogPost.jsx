import "./blog-post.scss";
import Section from "../../components/Section/Section";
import Image from "../../components/Image/Image";
import blogImage from "../../assets/images/blog-image.jpg";
import CommentForm from "../../components/CommentForm/CommentForm";
import BlogAside from "../../components/BlogAside/BlogAside";
import BlogAuthor from "../../components/BlogAuthor/BlogAuthor";

const BlogPost = () => {
  return (
    <div className="blog-post-page">
      <Section className={"blog-post-section"}>
        <BlogAuthor />
        <article>
          <Image className={"blog-post-pic"} src={blogImage} />
          <h1 className="blog-post-title">
            The Best (and Worst) Canadian Merchant Account Providers
          </h1>
          <p>
            A job is a regular activity performed in exchange for payment. A
            person usually begins a job by becoming an employee, volunteering,
            or starting a business. The duration of a job may range from an hour
            (in the case of odd jobs) to a lifetime (in the case of some
            judges). If a person is trained for a certain type of job, they may
            have a profession. The series of jobs a person holds in their life
            is their career. Jobs for people Generally people spend a good
            portion of their time doing a regular occupation. Some exceptions
            are being a student, disabled, retired or being/working in a
            creative field.
          </p>
          <h2>Types of job</h2>
          <p>
            There are a variety of jobs: full time, part time, temporary, odd
            jobs, seasonal, self-employment. People may have a chosen occupation
            for which they have received training or a degree. Those who do not
            hold down a steady job may do odd jobs or be unemployed.
            Moonlighting is the practice of holding an additional job or jobs,
            often at night, in addition to one’s main job, usually to earn extra
            income. A person who moonlights may have little time left for sleep
            or leisure activities.
          </p>
          <h2>Day job</h2>
          <p>
            The expression day job is often used for a job one works in to make
            ends meet while performing low-paying (or non-paying) work in their
            preferred vocation. Archetypical examples of this are the woman who
            works as a waitress (her day job) while she tries to become an
            actress, and the professional athlete who works as a laborer in the
            off season because he is currently only able to make the roster of a
            semi-professional team. While many people do hold a full-time
            occupation, “day job” specifically refers to those who hold the
            position solely to pay living expenses so they can pursue, through
            low paying entry work, the job they really want (which may also be
            during the day). The phrase strongly implies that the day job would
            be quit, if only the real vocation paid a living wage. Notable
            figures who had day jobs include the Wright brothers, who held
            full-time employment as bicycle repairmen while they experimented on
            powered flights. The phrase “don’t quit your day job” is a humorous
            response to a poor or mediocre performance not up to professional
            caliber. The phrase implies that the performer is not talented
            enough in that activity to be able to make a career out of it.
            Getting a job Further information: Job hunting and Employment
            Getting a first job is an important rite of passage in many
            cultures. Youth may start by doing household work, odd jobs, or
            working for a family business. In many countries, school children
            get summer jobs during the longer summer vacation. Students enrolled
            in higher education can apply for internships. Résumés summarize a
            person’s education and job experience for potential employers.
            Employers read job candidate résumés to decide who to interview for
            an open position.
          </p>
          <h2>Use of the word</h2>
          <p>
            Labourers often talk of “getting a job”, or “having a job”. This
            conceptual metaphor of a “job” as a possession has led to its use in
            slogans such as “money for jobs, not bombs”. Similar conceptions are
            that of “land” as a possession (real estate) or intellectual rights
            as a possession (intellectual property). The Online Etymology
            Dictionary explains that the origin of “job” is from the obsolete
            phrase “jobbe of work” in the sense of “piece of work”, and most
            dictionaries list the Middle English “gobbe” meaning “lump” (gob) as
            the origin of “jobbe”. Attempts to link the word to the biblical
            character Job seem to be folk etymology
          </p>
          <CommentForm style={{ marginTop: "10rem" }} />
        </article>
        <BlogAside />
      </Section>
    </div>
  );
};
export default BlogPost;
