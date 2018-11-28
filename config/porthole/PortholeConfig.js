import * as _ from 'lodash';
import config from '../config';

class PortholeConfig {
    constructor() {
        this.getServerPath = this.getServerPath.bind(this);
        this.isMobile = this.isMobile.bind(this);
        this.track = this.track.bind(this);
        this.getTabletBreakPoint = this.getTabletBreakPoint.bind(this);
        this.getGrid = this.getGrid.bind(this);
        this.getDefaultFeedTitle = this.getDefaultFeedTitle.bind(this);
        this.getDefaultForesTitle = this.getDefaultForesTitle.bind(this);
        this.getQuests = this.getQuests.bind(this);
        this.getLog = this.getLog.bind(this);
    }

    getServerPath() {
        const prodPath = 'https://cabinquest.now.sh';
        const devPath = `http://localhost:${config.port}`;

        if (process.env.NODE_ENV === 'production') {
            //
            return prodPath;
        } else {
            return devPath;
        }
        /*
        //var localPath = "http://localhost:" + location.port;
        var localPath = "http://localhost:3000";
        var remotePath = "http://cabinquest-50966.onmodulus.net"; //"http://cabinquest.jit.su";

        var serverPath = (document && document.domain !== "cabinquest-50966.onmodulus.net") ? localPath : remotePath;
        //serverPath = "http://www.cabinquest.jit.su";
        //var serverPath = ($window.isNative) ? "http://www.cabinquest.jit.su" : "";
        //serverPath = ( document.location.port === "8888" ) ? "http://www.cabinquest.jit.su" : "";
        //serverPath = "http://www.cabinquest.jit.su";
        //var serverPath = "http://www.cabinquest.jit.su";
        */
    }

    isMobile() {
        let check = false;
        (function(a) {
            if (
                /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                    a
                ) ||
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                    a.substr(0, 4)
                )
            )
                check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);

        if (this.log) console.log(`ConfigService - isMobile check: ${check}`);

        return check;
    }

    track(category, action, opt_label, opt_value, opt_noninteraction) {
        category = typeof category !== 'undefined' ? category : 'missing!';
        action = typeof action !== 'undefined' ? action : 'missing!';
        opt_label = typeof opt_label !== 'undefined' ? opt_label : 'none';
        opt_value = typeof opt_value !== 'undefined' ? opt_value : 'none';
        opt_noninteraction =
            typeof opt_noninteraction !== 'undefined'
                ? opt_noninteraction
                : 'none';

        const domain =
            document && document.domain.indexOf('cabinquest') === -1
                ? ' porthole'
                : ' cabinquest';
        // var id = domain  + ' ' + trackStr;

        opt_noninteraction += domain;

        // _trackEvent(category, action, opt_label, opt_value, opt_noninteraction)

        _gaq.push([
            '_trackEvent',
            category,
            action,
            opt_label,
            opt_value,
            opt_noninteraction
        ]);
    }

    isNative() {
        return window.isNative;
    }

    getTabletBreakPoint() {
        return { width: 700, height: 500 };
    }

    getGrid() {
        // full 6 x 8
        // park 3 x 5
        return { rows: 6, columns: 8 };
    }

    getDefaultFeedTitle() {
        return 'Porthole';
    }

    getDefaultForesTitle() {
        return 'bellwoods';
    }

    getQuests() {
        const setupReviewCollection = function() {
            // $location.path('/bellwoods/park').search({treeOption: 0});
            // $rootScope.$broadcast("NavViewController:forest:click");
        };

        const quest0 = {
            title: 'Cultivate Forest',
            description: '',
            action: setupReviewCollection
        };

        return [quest0];
    }

    getParkPattern() {
        const row0 = ['0_0'];

        const pattern = [];

        return pattern;
    }

    getConcernedViews() {
        return [
            'ProfileViewController',
            'PortholeSettingsViewController',
            'PortholeMediaController'
        ];
    }

    getLog(className) {
        return;

        const logs = [
            { className: 'BigCityBraveFactory', log: false },
            { className: 'BellwoodsGameActorsFactory', log: false },
            { className: 'BellwoodsTreeActorFactory', log: false },
            { className: 'BellwoodsModel', log: false },
            { className: 'BellwoodsGameController', log: false },
            { className: 'BranchesViewController', log: false },
            { className: 'ClusterFactory', log: false },
            { className: 'CabinQuestUserFactoryService', log: false },
            { className: 'CabinQuestViewController', log: false },
            { className: 'ControlsViewController', log: false },
            { className: 'DronePreloaderFactory', log: false },
            { className: 'EvergreenGoldRushFactory', log: false },
            { className: 'FileUploadController', log: false },
            { className: 'HiveViewController', log: false },
            { className: 'HikingPreloaderFactory', log: false },
            { className: 'IndexCtrl', log: false },
            { className: 'ItemViewController', log: false },
            { className: 'LeafViewController', log: false },
            { className: 'MessagesViewController', log: false },
            { className: 'PortholeSettingsViewController', log: false },
            { className: 'PortholeMediaController', log: true },
            { className: 'PortholeTreeUtil', log: false },
            { className: 'PortholeTreeService', log: false },
            { className: 'PortholeViewController', log: true },
            { className: 'PortholeImageService', log: false },
            { className: 'ProfileViewController', log: false },
            { className: 'PortholeAppViewController', log: true },
            { className: 'PreloaderShieldController', log: false },
            { className: 'NavCtrl', log: false },
            { className: 'SigninCtrl', log: false },
            { className: 'SpaceViewController', log: true },
            { className: 'SpaceFactory', log: false },
            { className: 'SpaceAssetFactory', log: true },
            { className: 'SpaceAssetConfigFactory', log: false },
            { className: 'SpaceStoreFactory', log: false },
            { className: 'StoreViewController', log: false },
            { className: 'TreeFactoryService', log: false },
            { className: 'TagsViewController', log: false },
            { className: 'TreeViewController', log: false },
            { className: 'UnitAnimationFactory', log: false },
            { className: 'TakeoutViewController', log: false }
        ];

        // turn off all in prod
        // docuent is not available server side
        if (document) {
            if (
                document.domain === 'dilfffpckfhcpgidnmgaeoidgekcjlln' ||
                document.domain === 'cabinquest-50966.onmodulus.net'
            ) {
                _.each(logs, item => {
                    item.log = false;
                });
            }
        }
        //

        // var result = _.findWhere(logs, {className: className, log: true});

        // return (undefined !== result ) ? true : false;
        return true;
    }
}

export default new PortholeConfig();
