import { leftNumbers, leftTitles } from "../constants";

const { PortfolioHomePageRoute, PortfolioJourneyPageRoute, PortfolioProjectsPageRoute, PortfolioBlogsPageRoute, PortfolioAboutPageRoute } = require("@/router/routes");

export default class UtilService {

    getPageNumberTitle(currentPageRoute: string) {
        switch (currentPageRoute) {
            case PortfolioHomePageRoute:
                return { number: leftNumbers.ONE, title: leftTitles.INTRODUCE};
            case PortfolioJourneyPageRoute:
                return { number: leftNumbers.TWO, title: leftTitles.JOURNEY };
            case PortfolioProjectsPageRoute:
                return { number: leftNumbers.THREE, title: leftTitles.PROJECTS };
            case PortfolioBlogsPageRoute:
                return { number: leftNumbers.FOUR, title: leftTitles.BLOGS };
            case PortfolioAboutPageRoute:
                return { number: leftNumbers.FIVE, title: leftTitles.ABOUT };
            default:
                return { number: leftNumbers.ZERO, title: leftTitles.PORTFOLIO };
        }
    }
}