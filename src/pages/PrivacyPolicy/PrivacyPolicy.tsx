import {
  Container,
  Typography,
  Link,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Container sx={{ textAlign: "left" }}>
      <Typography variant="h4" gutterBottom>
        GDPR Privacy Policy for VietRocHack
      </Typography>
      <Typography variant="body1" paragraph>
        At SwipeAndFly, accessible at{" "}
        <Link href="https://swipeandfly.world/">swipeandfly.world</Link>, one of
        our main priorities is the privacy of our visitors. This Privacy Policy
        document contains types of information that is collected and recorded by
        SwipeAndFly and how we use it.
      </Typography>
      <Typography variant="body1" paragraph>
        If you have additional questions or require more information about our
        Privacy Policy, do not hesitate to contact us through email at{" "}
        <Link href="mailto:hochivuong2002@gmail.com">
          hochivuong2002@gmail.com
        </Link>
      </Typography>

      <Typography variant="h5" gutterBottom>
        General Data Protection Regulation (GDPR)
      </Typography>
      <Typography variant="body1" paragraph>
        We are a Data Controller of your information.
      </Typography>
      <Typography variant="body1" paragraph>
        VietRocHack's legal basis for collecting and using the personal
        information described in this Privacy Policy depends on the Personal
        Information we collect and the specific context in which we collect the
        information:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="VietRocHack needs to perform a contract with you" />
        </ListItem>
        <ListItem>
          <ListItemText primary="You have given VietRocHack permission to do so" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Processing your personal information is in VietRocHack's legitimate interests" />
        </ListItem>
        <ListItem>
          <ListItemText primary="VietRocHack needs to comply with the law" />
        </ListItem>
      </List>
      <Typography variant="body1" paragraph>
        VietRocHack will retain your personal information only for as long as is
        necessary for the purposes set out in this Privacy Policy. We will
        retain and use your information to the extent necessary to comply with
        our legal obligations, resolve disputes, and enforce our policies.
      </Typography>
      <Typography variant="body1" paragraph>
        If you are a resident of the European Economic Area (EEA), you have
        certain data protection rights. If you wish to be informed what Personal
        Information we hold about you and if you want it to be removed from our
        systems, please contact us.
      </Typography>
      <Typography variant="body1" paragraph>
        In certain circumstances, you have the following data protection rights:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="The right to access, update or to delete the information we have on you." />
        </ListItem>
        <ListItem>
          <ListItemText primary="The right of rectification." />
        </ListItem>
        <ListItem>
          <ListItemText primary="The right to object." />
        </ListItem>
        <ListItem>
          <ListItemText primary="The right of restriction." />
        </ListItem>
        <ListItem>
          <ListItemText primary="The right to data portability" />
        </ListItem>
        <ListItem>
          <ListItemText primary="The right to withdraw consent" />
        </ListItem>
      </List>

      <Typography variant="h5" gutterBottom>
        Log Files
      </Typography>
      <Typography variant="body1" paragraph>
        SwipeAndFly follows a standard procedure of using log files. These files
        log visitors when they visit websites. All hosting companies do this and
        a part of hosting services' analytics. The information collected by log
        files include internet protocol (IP) addresses, browser type, Internet
        Service Provider (ISP), date and time stamp, referring/exit pages, and
        possibly the number of clicks. These are not linked to any information
        that is personally identifiable. The purpose of the information is for
        analyzing trends, administering the site, tracking users' movement on
        the website, and gathering demographic information.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Cookies and Web Beacons
      </Typography>
      <Typography variant="body1" paragraph>
        Like any other website, SwipeAndFly uses ‘cookies'. These cookies are
        used to store information including visitors' preferences, and the pages
        on the website that the visitor accessed or visited. The information is
        used to optimize the users' experience by customizing our web page
        content based on visitors' browser type and/or other information.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Privacy Policies
      </Typography>
      <Typography variant="body1" paragraph>
        You may consult this list to find the Privacy Policy for each of the
        advertising partners of SwipeAndFly.
      </Typography>
      <Typography variant="body1" paragraph>
        Third-party ad servers or ad networks uses technologies like cookies,
        JavaScript, or Web Beacons that are used in their respective
        advertisements and links that appear on SwipeAndFly, which are sent
        directly to users' browser. They automatically receive your IP address
        when this occurs. These technologies are used to measure the
        effectiveness of their advertising campaigns and/or to personalize the
        advertising content that you see on websites that you visit.
      </Typography>
      <Typography variant="body1" paragraph>
        Note that SwipeAndFly has no access to or control over these cookies
        that are used by third-party advertisers.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Third Party Privacy Policies
      </Typography>
      <Typography variant="body1" paragraph>
        SwipeAndFly's Privacy Policy does not apply to other advertisers or
        websites. Thus, we are advising you to consult the respective Privacy
        Policies of these third-party ad servers for more detailed information.
        It may include their practices and instructions about how to opt-out of
        certain options. You may find a complete list of these Privacy Policies
        and their links here: Privacy Policy Links.
      </Typography>
      <Typography variant="body1" paragraph>
        You can choose to disable cookies through your individual browser
        options. To know more detailed information about cookie management with
        specific web browsers, it can be found at the browsers' respective
        websites. What Are Cookies?
      </Typography>

      <Typography variant="h5" gutterBottom>
        Children's Information
      </Typography>
      <Typography variant="body1" paragraph>
        Another part of our priority is adding protection for children while
        using the internet. We encourage parents and guardians to observe,
        participate in, and/or monitor and guide their online activity.
      </Typography>
      <Typography variant="body1" paragraph>
        SwipeAndFly does not knowingly collect any Personal Identifiable
        Information from children under the age of 13. If you think that your
        child provided this kind of information on our website, we strongly
        encourage you to contact us immediately and we will do our best efforts
        to promptly remove such information from our records.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Online Privacy Policy Only
      </Typography>
      <Typography variant="body1" paragraph>
        This privacy policy applies only to our online activities and is valid
        for visitors to our website with regards to the information that they
        shared and/or collect in SwipeAndFly. This policy is not applicable to
        any information collected offline or via channels other than this
        website.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Consent
      </Typography>
      <Typography variant="body1" paragraph>
        By using our website, you hereby consent to our Privacy Policy and agree
        to its Terms and Conditions.
      </Typography>
    </Container>
  );
};

export default PrivacyPolicy;
