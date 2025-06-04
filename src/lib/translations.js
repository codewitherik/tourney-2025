import { Copyright } from "lucide-react"

export const translations = {
  en: {
    common: {
      loading: "Loading...",
      error: "An error occurred",
      save: "Save",
      cancel: "Cancel",
      delete: "Delete",
      edit: "Edit",
      create: "Create",
      add: "Add",
      back: "Back",
      next: "Next",
      submit: "Submit",
      manage: "Manage",
      viewDetails: "View Details",
      viewAll: "View All",
      fullView: "Full View",
      actions: "Actions",
    },
    auth: {
      signIn: "Sign In",
      signUp: "Sign Up",
      signOut: "Sign Out",
      username: "First Name",
      password: "Password",
      email: "Email",
      confirmemail: "Confirm Password",
      text: "by creating an account you agree to our terms of use.",
    },
    nav: {
      home: "Home",
      About us: "Features",
      sponsors: "Sponsoren",
      features: "Features",
      testimonials: "Our customers",
      pricing: "Pricing",
      FAQ: "Questions and Answers",
      blog: "Tourney Blog",
      support: "Support",
      footer: "Footer",
    },
    hero: {
      title: "Plan Your Next Tournament ... tournament with Tourney",
      subtitle: "Quick and easy match scheduler",
      featurebtn: "Beautiful live presentation",
      featurebtn2: "Online registration page",
      createbtn:  "Create a free tournament",
    },
     About us: {
      title:     "No more Excel",
      subtitle: "Tourney is a an easy to use web app to manage your tournament: from registration to the award ceremony",
      teams: {
        title: "Manage teams",
        description: "Add teams manually or open an online registration page in minutes",
      },
      standings: {
        title: "Keep score",
        description: "Process results effortlessy from any device and everyone is up to date",
      },
      brackets: {
        title: "Pick your format",
        description: "Combine grops, brackets and single matches to create your ideal tournament setup",
      },
    },

    sponsors : {
      text: "Over 50,000 organiers from 50 discplines ranging from amateures to profissionals"
    },

      features: {
        text: "Its all about the presentation",
        subtitle: "Communicate the match schedule, latest scores and live standings with Tourney Life",
        
        tounament-website: {
          text: "Tounarment Website",
          subttile: "Create a tournament page with your own branding and share the URL with players and fans",
        },

        slideshow: {
          text: "Slideshow",
          subtitle: "Use a projector or television to show beatutiful slides. Mix and match the content as your like",
        },
      },

      customers: {
        text: "What others say about Tourney",
        subtile: "Find out some of the reasons of customaers have to recommed us"

        customer1: {
          text: "My exprience with Tourney was execllent. The software really helped me run our event smmothly"
        },

        customer2: {
          text: "Thanks to Tourney even a last minute canceltion was easy to tackle. Investing in Tourney turns stress into fun."
        }
      }

      pricing: {
        text: "Pricing",
        subtitle: "Test our tournament planner for free and upgrade whenever you want",

        preis1: {
          text: "Amateur, Free forever"
          subtitle: "Up to 8 Teams, Flexible format and planning Tool",
        },

        preis2: {
          text: "Worldclass, 40 euros per tournament",
          subtile: "Up to 60 teams, custom branding list sponsors",
        },

        preis3: {
          text: "legendary 120 euros per tournament",
          subtitle: "Over 60 Teams custom branding",
        }
      }

      FAQ: {
        FAQ1: "is there a trail version avabile"
        subtile: "Start simple by creating your free tournament and testing our tool. You can entirely create your own setup, match schedule and tournament website in the free of charge environment before upgrading.",

        FAQ2: "What happens when my tournament is finished?",
        subtitle: "Your tournament and its public website will remain visible. However, you'll need a new upgrade if you want to organize a new edition of the tournament or another tournament with more than 8 teams.",
      }

    tournament: {
      createNew: "+ New Tournament",
      myTournaments: "Tournaments",
      tournamentInfo: "Tournament Information",
      groupStandings: "Group Standings",
      knockoutBracket: "Knockout Bracket",
      settings: "General",
      invite: "Invite",
      presentation: "Presentation",
      format: "Format",
      location: "Locations",
      teams: "Particpants",
      status: {
        active: "Active",
        upcoming: "Upcoming",
        completed: "Completed"
      },
      formatTypes: {
        groups: "Group phase only",
        groups and knouckout: "Group phase and knockout phase",
        knockout: "Knockout phase only",
        single match: "+ Single Match",
        text: "Or compose the tournament yourself by combining groups,brackets and single matches"
      },
      sportTypes: {
        football: "Football/Soccer",
        basketball: "Basketball",
        volleyball: "Volleyball",
        handball: "Handball",
        tennis: "Tennis",
        ice hockey: "Hockey",
      },
      tabs: {
        overview: "Overview",
        teams: "Teams",
        groups: "Groups",
        matches: "Matches",
        bracket: "Bracket",
        statistics: "Statistics"
      },
      steps: {
        basicInfo: "General",
        format: "Format",
        teams: "Parctipants",
        schedule: "Schedule",
        presentation: "presentation",
        results: "Results"
      },
      form: {
        name: "Tournament title",
        namePlaceholder: "Tournament Title",
        startDate: "Start Date",
        endDate: "End Date",
        selectSport: "Select a sport",
        location: "Choose a venue",
        locationPlaceholder: "Venue",
        publicTournament: "Make this tournament public",
        teamSetup: "Particpants",
        teamsNote: "You can create more divisions if your tournament has mutilple groups or competions levels",
        addTeamsAfterCreation: "Teams can be added after tournament creation",
        scheduleSettings: "Schedule Settings",
        scheduleNote: "You can set up your match schedule after creating the tournament.",
        scheduleAfterCreation: "Matches can be scheduled after tournament creation"
      },
      createSuccess: "Tournament Created",
      createSuccessMessage: "Your tournament has been created successfully.",
      createFailed: "Failed to Create Tournament",
      updateSuccess: "Tournament Updated",
      updateSuccessMessage: "Tournament details have been updated successfully.",
      updateFailed: "Failed to Update Tournament",
      groupsTabContent: "Group management will be available soon. You'll be able to create groups and assign teams to them.",
      matchesTabContent: "Match scheduling functionality will be available soon. You'll be able to create and manage all your tournament matches here.",
      statisticsTabContent: "Tournament statistics will be available soon. Track top scorers, team performance, and more.",
      noMatches: "No matches found",
      noGroups: "No groups created yet"
    },
    team: {
      management: "Team Management",
      addTeam: "Add Team",
      addFirstTeam: "Add First Team",
      editTeam: "Edit Team",
      team: "Team",
      name: "Team Name",
      shortName: "Short Name",
      logo: "Logo",
      noTeams: "No teams have been added yet",
      formDescription: "Enter the team details below. Short name is used for display in small spaces (max 3 characters).",
      addSuccess: "Team Added",
      addSuccessMessage: "The team has been added successfully.",
      addFailed: "Failed to Add Team",
      updateSuccess: "Team Updated",
      updateSuccessMessage: "The team has been updated successfully.",
      updateFailed: "Failed to Update Team",
      deleteSuccess: "Team Deleted",
      deleteSuccessMessage: "The team has been deleted successfully.",
      deleteFailed: "Failed to Delete Team",
      deleteConfirm: "Are you sure you want to delete this team?",
      formError: "Form Error",
      formErrorMessage: "Please check the form and try again."
    },
    match: {
      schedule: "Match Schedule",
      addMatch: "Add Match",
      scheduleFirstMatch: "Schedule First Match",
      homeTeam: "Home Team",
      awayTeam: "Away Team",
      selectTeam: "Select team",
      group: "Group",
      selectGroup: "Select group",
      noGroup: "No group (knockout match)",
      date: "Date & Time",
      location: "add playing field",
      locationPlaceholder: "name",
      round: "Select groups/brackets",
      roundPlaceholder: "select Round",
      formDescription: "Enter the match details below.",
      sameTeamError: "Home and away teams must be different",
      unscheduled: "Unscheduled Matches",
      dateNotSet: "Date not set",
      enterResult: "Enter Result",
      editResult: "Edit Result",
      enterMatchResult: "Enter Match Result",
      createSuccess: "Match Created",
      createSuccessMessage: "The match has been created successfully.",
      createFailed: "Failed to Create Match",
      updateSuccess: "Match Updated",
      updateSuccessMessage: "The match has been updated successfully.",
      updateFailed: "Failed to Update Match",
      noMatches: "No matches found"
    },
    standings: {
      played: "P",
      won: "W",
      drawn: "D",
      lost: "L",
      goalDiff: "GD",
      points: "PTS",
      noData: "No standings data available",
      recalculateSuccess: "Standings Recalculated",
      recalculateSuccessMessage: "Team standings have been recalculated successfully.",
      recalculateFailed: "Failed to Recalculate Standings"
    },
    bracket: {
      noKnockoutStages: "No knockout stages defined for this tournament",
      visContent: "Bracket visualization can be configured after setting up knockout rounds",
      comingSoon: "Advanced bracket visualization coming soon"
    },
    presentation: {
      title: "Presentation Mode",
      subtitle: "Use this view on large screens during your tournament",
      exitPresentation: "Exit Presentation Mode",
      currentMatches: "Current Matches",
      currentView: "Current View",
      changeView: "Change View"
    },
    footer: {
      logo: "Tourney-Turnierplaner",
      slogan: "The easiest way to organize and manage sports tournaments of any size and format.",
      product: "Product",
      features: "Features",
      pricing: "Pricing",
      examples: "Examples",
      templates: "Templates",
      api: "API",
      resources: "Resources",
      documentation: "Documentation",
      tutorials: "Tutorials",
      supportCenter: "Support Center",
      blog: "Blog",
      community: "Community",
      company: "Company",
      aboutUs: "About Us",
      careers: "Careers",
      contact: "Contact",
      imprint: "Imprint",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      Copyright: "© 2025 Tourney-Turnierplaner",
      allRightsReserved: "all rights reserved -- by codewitherik",
      text: "designed by Erik Schmidt codewitherik",
      text2:  "Made by Erik Schmidt, and Alexander Paul"
      text3: "codewtitherik and dotdivlearn"
    },
    cta: {
      title: "Ready to Create Your Tournament?",
      subtitle: "Join thousands of sports organizers who trust Tournify to run successful tournaments. Get started today for free!",
      createFree: "Create Free Tournament",
      viewPricing: "View Pricing Plans"
    }
  },
 