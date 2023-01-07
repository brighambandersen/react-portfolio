import LaunchSharpIcon from "@material-ui/icons/LaunchSharp";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Card, Container, makeStyles } from "@material-ui/core";
import { projects } from "../data";
import SectionTop from "../components/SectionTop";
import { COLORS } from "../styles/theme";
import IconLink from "../components/IconLink";

const useStyles = makeStyles((theme) => ({
  header: {
    color: COLORS.white,
  },
  url: {
    color: COLORS.white,
    padding: theme.spacing(2),
  },
  card: {
    padding: theme.spacing(4),
    margin: theme.spacing(4),
  },
}));

function Sites() {
  const styles = useStyles();

  return (
    <section id="sites">
      <Container maxWidth="md">
        <SectionTop 
          title="My Websites & Projects" 
          iconLink={
            <IconLink
              icon={<GitHubIcon />}
              link="https://github.com/brighamband"
              tooltipTitle="Check out my GitHub"
            />
          }
        />
        {projects.map((site) => (
          <Card key={site.name} className={styles.card}>
            <h2>{site.name}</h2>
            <p>{site.description}</p>
            {site.url && (
              <IconLink
                icon={<LaunchSharpIcon />}
                link={site.url}
                tooltipTitle={
                  <>
                    <h3 className={styles.header}>Site:</h3>
                    <code className={styles.url}>{site.url}</code>
                  </>
                }
              />
            )}
            {site.srcCode && (
              <IconLink
                icon={<GitHubIcon />}
                link={site.srcCode}
                tooltipTitle={
                  <>
                    <h3 className={styles.header}>Source Code:</h3>
                    <code className={styles.url}>{site.srcCode}</code>
                  </>
                }
              />
            )}
          </Card>
        ))}
      </Container>
    </section>
  );
};

export default Sites;
